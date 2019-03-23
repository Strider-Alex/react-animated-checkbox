# react-animated-checkbox
A React component to display an animated checkbox on your website.
## Demo
![GIF](https://raw.githubusercontent.com/Strider-Alex/github-images/master/react-animated-checkbox/animation.gif)

## Installation
```shell
npm install --save react-animated-checkbox
```
## Usage
```jsx
import CheckBox from "react-animated-checkbox"
...
<CheckBox
  checked={this.state.checked}
  checkBoxStyle={{
    checkedColor: "#34b93d",
    size: 100,
    unCheckedColor: "#b8b8b8"
  }}
  duration={400}
  onClick={()=>this.handleClick()}
/>
```
A more detailed example can be found [here](https://github.com/Strider-Alex/react-animated-checkbox/tree/master/demo).
## Props
| Property | Type | Explanation |
|---|---|---|
|checked|boolean|the checkbox animates when this property changes from ```false``` to ```true```|
|checkBoxStyle.checkedColor|string|checkbox color when property ```checked``` is ```true```|
|checkBoxStyle.unCheckedColor|string|checkbox color when property ```checked``` is ```false```|
|checkBoxStyle.size|number|checkbox size in pixels|
|duration|number|animation duration in ms
|onClick|function|this function is called when the checkbox is clicked
