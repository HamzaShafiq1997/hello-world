var arr = [];
var index_id;

function add()
{
    if (typeof(index_id) != "undefined")
    {
        arr[index_id] = document.getElementById("textbox").value;

        document.getElementById("textbox").value = "";
    }
    else
    {
        var temp = document.getElementById("textbox").value;

        arr.push(temp);
     
        document.getElementById("textbox").value = "";
    }
    updatelist();
}
function updatelist()
{
    var ul = document.getElementById("task");
   
    ul.innerHTML = "";
    
    var html = "";

    var length = arr.length - 1;

    for(var i = length; i >= 0; i--)
    {
        html += '<li id="'+ i +'">'+ arr[i] +' <span class="list-btn"><input class="Deletebtn" type="button" value="Delete" onclick="Remove(this)">&nbsp;&nbsp;<input class="Deletebtn" type="button" value="Edit" onclick="edit(this)"></span></li>'
    }
   
    ul.innerHTML += html;
}
function Remove(tag)
{
    var index_id = tag.parentNode.parentNode.id;
    console.log(index_id);

    var a = arr.splice(index_id,1);
    console.log(a);
    console.log(arr);

    updatelist();

}
function edit(tag)
{
    index_id = tag.parentNode.parentNode.id;

    document.getElementById("textbox").value = arr[index_id];

    
}