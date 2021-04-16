import React, { Component } from 'react';
import ListUsers from '../list-users';
import DropZone from '../dropzone';


import './app.css';


export default class App extends Component {

  state = {
    userList: [],
    classNameList: 'list-hide',
    classNameDrop: 'content'
  };


  deleteItem = (id) => {

    this.setState(({ userList }) => {

      const idx = userList.findIndex((el) => el.id === id);

      const newArray = [
        ...userList.slice(0, idx),
        ...userList.slice(idx + 1)
      ];

      return {
        userList: newArray
      };
    });
  };



  processUploadedFile = (file) => {
    const json = JSON.parse(file);

    let userNames = [];
    let classNameNew = 'list';
    let classDrop = 'content-hide';

    process = (el) => {
        Object.entries(el).forEach(([key, value]) => {
        if(key === 'user') {
          userNames.push(value)
        } else if(key === 'replies') {
            value.forEach((el) => {
            process(el);
          });
        }
      });
    }

    process(json);

    let uniqueNames = Array.from(new Set(userNames));

    let users = uniqueNames.map((name, index) => {
      return {
        user: name,
        id: index };
    })


    this.setState(({userList, classNames}) => {
      return {
        userList: users,
        classNameList: classNameNew,
        classNameDrop: classDrop
      };
    });
  };



  render() {

    const { userList, classNameList, classNameDrop } = this.state;

    return (
      <div>
        <div className={classNameDrop}>
          <DropZone
              onFileUploaded={this.processUploadedFile} />
        </div>

        <div className={classNameList}>
          <ListUsers
            users={userList}
            onDeleted={this.deleteItem} />
        </div>

      </div>
    )
  }
}
