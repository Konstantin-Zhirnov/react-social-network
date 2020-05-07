import {connect} from "react-redux";
import {
    follow, getPageChanged, requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    //getUsersSelector,
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalItemsCount, getPortionSize
} from "../../redux/usersSelectors";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getPageChanged(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> :
                <Users totalItemsCount={this.props.totalItemsCount}
                       portionSize={this.props.portionSize}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        //users: getUsersSelector(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalItemsCount(state),
        portionSize: getPortionSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
   // withAuthRedirect,
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers, getPageChanged})
)(UsersContainer)

