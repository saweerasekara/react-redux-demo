import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userActions";

function UserContainer(userData, fetchUsers) {
  useEffect(() => {
    fetchUsers();
  });

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  };
};

export default connect(mapStatetoProps, mapDispatchedToProps)(UserContainer);
