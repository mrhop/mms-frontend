/**
 * Created by Donghui Huo on 2018/1/31.
 */
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

import {Table, Spin} from 'antd';

import {accessControlActions} from '../../../../redux/index/actions'
import * as ActionTypes from '../../../../redux/index/actions/ActionTypes'
import {PostTempData} from '../../../../common/TempData'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
    this.props.getPostList()
  }

  componentWillReceiveProps(nextProps) {
    const {type, data} = nextProps
    if (type === ActionTypes.ACCESSCONTROL_POST_LIST_GOT) {
      this.setState({loading: false, data})
    } else if (type === ActionTypes.ACCESSCONTROL_POST_LIST_FAILURE) {
      this.setState({loading: false})
    }
  }


  render() {
    const {loading, data} = this.state;
    return <Fragment>
      <div className="actions"><Link className="button"
                                     to="/accesscontrol/post/addpost"><span>新增职位</span></Link></div>
      <hr/>
      <div className="lists">
        <Spin style={{width:'100%'}} tip="处理中"
              spinning={loading}>
          <Table pagination={{defaultPageSize:10}} columns={PostTempData.list.columns}
                 dataSource={data}
                 expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
          />
        </Spin>
      </div>
    </Fragment>
  }

}

Index.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  getPostList: PropTypes.func
}


const mapStateToProps = (state) => {
  return {...state.accessControlPostList}
}

const mapDispatchToProps = {
  ...accessControlActions
}
const IndexProxy = connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
export default IndexProxy;
