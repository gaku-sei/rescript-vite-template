module Document = {
  @val @scope("document") external getElementById: string => option<Dom.element> = "getElementById"
}

switch Document.getElementById("root") {
| None => Js.Exn.raiseError("Root element #root couldn't be found")
| Some(root) => ReactDOM.render(<div> {"Hello, World!"->React.string} </div>, root)
}
