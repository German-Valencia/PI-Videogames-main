
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

//import SearchBar from "../components/SearchBar/SearchBar";

configure({ adapter: new Adapter() });

describe("<SearchBar />", () => {
  let wrapper;
  let name;
  beforeEach(() => {
    name = "Grand";
    wrapper = mount(<input defaultValue={name}/>);
  });

  it('deberia renderizar un "div" que contenga un imput con el "name" que recibe por props', () => {
    expect(wrapper.contains(<input defaultValue={name}/>)).toEqual(true);    
  });
});