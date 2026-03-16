In React Why Single Root : Because React Virtual dom requires one parent node to maintain ui tree and perform efficient renderring

Props in React 

How to send <hello name= ""/>
how to recieve funcrion({name});
what if recieve funcrion({sal : name}); 
What { sal: Name } means

This syntax means:

Take prop "sal" and store it in variable "Name"

So inside the function:

Name → contains value of sal
sal → does NOT exist

That is why {sal} is undefined, so nothing prints.


```
Rendering Array Using Props 
What React actually supports rendering
React can render: strings,numbers, arrays of elements
How to Parse: style = {[]} || style = {variable name}
recieve same as normal string

why it render like String
Solution: 

```
```
Rendering object Using Props 

How to Parse: style = {{} } || style = {variable name}
recieve same as normal string
but Norma access not possible give error alway accesible through key
why it render like String
Solution: 

```
