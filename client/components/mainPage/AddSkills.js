import React, { Component } from 'react';

const AddSkills = (props) => {
  return (
    <div>
      {/* <select name="skills" id="skills" value={props.choice} onChange={props.handleChoice}>
        <option value="JavaScript">JavaScript</option>
        <option value="React">React</option>
        <option value="SQL">SQL</option>
        <option value="Node_Express">Node Express</option>
        <option value="Ruby">Ruby</option>
        <option value="MongoDB">MongoDB</option>
      </select>
      <button onClick={props.handleSearch}>Search</button> */}

      <input
        type="checkbox"
        id="1"
        name="javascript"
        value="JavaScript"
      ></input>
      <label for="1">JavaScript</label>
      <br />
      <input type="checkbox" id="2" name="SQL" value="SQL"></input>
      <label for="2">SQL</label>
      <br />
      <input type="checkbox" id="3" name="React" value="React"></input>
      <label for="3">React</label>
      <br />
      <input
        type="checkbox"
        id="4"
        name="Node Express"
        value="Node Express"
      ></input>
      <label for="4">Node Express</label>
      <br />
      <input type="checkbox" id="5" name="HTML" value="HTML"></input>
      <label for="5">HTML</label>
      <br />
      <input type="checkbox" id="6" name="CSS" value="CSS"></input>
      <label for="6">CSS</label>
      <br />
      <input type="checkbox" id="7" name="Redux" value="Redux"></input>
      <label for="7">Redux</label>
      <br />
    </div>
  );
};

export default AddSkills;
