import React, { Component } from 'react'

export default class Upload extends Component {
  render() {
    return (
    <form>
      <div className="uploadPage">
        <div className="uploadPage__mainContainer">
            <label className="uploadPage__mainContainer--imgContainer">
                <img src="../assets/icons/Large Upload.svg"
                className="uploadPage__mainContainer--imgContainer__img"
                ></img>
            </label>
            <div className="uploadPage__mainContainer--rightBox">
                <label className="uploadPage__mainContainer--rightBox__vidNameContainer">
                        Video Name:
                    <input
                            type="text"
                        />
                </label>
                <label className="uploadPage__mainContainer--rightBox__vidDescriptionContainer">
                        Video Description:
                    <input
                        type="text"
                    />
                </label>
            </div>
        </div>
      </div>
    </form>
    )
  }
}
