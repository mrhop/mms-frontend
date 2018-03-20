/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin, Divider, Modal} from 'antd';
const confirm = Modal.confirm
import {baseDataActions, optionActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getProductCategoryList()
    this.props.getProductCategoryParentOptions()
  }


  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_LIST_GOT || type === ActionTypes.BASEDATA_PRODUCTCATEGORY_DELETE_SUCCESS) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_LIST_FAILURE) {
      this.setState({loading: false})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_DELETE_BEGIN || type === ActionTypes.BASEDATA_PRODUCTCATEGORY_LIST_QUERY) {
      this.setState({loading: true})
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_DELETE_SUCCESS) {
      this.props.getProductCategoryList(this.state.tableCondition)
    } else if (type === ActionTypes.BASEDATA_PRODUCTCATEGORY_PARENT_OPTIONS_GOT) {
      this.setState({productCategoryParentOptions: data})
    }
  }


  showDeleteConfirm(id) {
    confirm({
      title: '确定删除该记录?',
      content: '该记录删除不恢复',
      okType: 'danger',
      onOk: (() => {
        this.props.deleteProductCategory(id)
      }).bind(this),
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  onChange = (pagination, filters, sorter)=> {
    this.props.getProductCategoryList({pagination, filters})
    this.setState({
      tableCondition: {pagination, filters}
    })
    console.log('params', pagination, filters);
  }

// 删除给出alert msg，确认后，再进行删除
  render() {
    const {loading, data} = this.state;
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: '上级分类',
        dataIndex: 'parent',
        key: 'parent',
        filters: this.state.productCategoryParentOptions,
        filterMultiple: false,
      }, {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Link to={{
              pathname: '/basedata/productcategory/updateproductcategory',
              state: { id: record.key }
            }}>修改</Link>
            <Divider type="vertical"/>
            <Link to="#" onClick={this.showDeleteConfirm.bind(this,record.key)}>删除</Link>
            </span>
        )
      }]
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/basedata/productcategory/addproductcategory"><span>新增产品分类</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10}} columns={columns}
                 dataSource={data} onChange={this.onChange}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.array,
  getProductCategoryList: PropTypes.func,
  deleteProductCategory: PropTypes.func,
  getProductCategoryParentOptions: PropTypes.func,
}


const mapStateToProps = (state) => {
  return {
    ...state.baseDataProductCategoryList,
    ...state.baseDataProductCategoryParentOptions
  }
}

const mapDispatchToProps = {
  ...baseDataActions, ...optionActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
