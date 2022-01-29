const app = new Vue({
  el: "#app",
  data: {
    storageKey: "todoList",
    newTodo: "",
    todoList: []
  },
  methods: {
    addTodo: function(){
      if (this.newTodo == "") return
      this.todoList.push({text: this.newTodo, done: false, hover: false})
      this.newTodo = ""
    },
    remove: function(index){
      if(this.todoList[index].done == true){
        this.todoList.splice(index, 1)
      }
    }
  },
  watch: {
    todoList: {
      handler: function(){
          localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.todoList)
          )
      },
      deep: true
    }
  },
  created: function(){
    var dataStr = localStorage.getItem(this.storageKey)
    if(dataStr){
      this.todoList = JSON.parse(dataStr)
    }
  },
});