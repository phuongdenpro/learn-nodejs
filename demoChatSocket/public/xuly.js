var socket = io("http://localhost:3000");
        // socket.on("server-send-data", function (data) {
        //     $("#noidung").append(data + ", ")
        // });

        socket.on("server-send-color",function(data){
            $("body").attr("bgColor",data);
        })
        $(document).ready(function () {
            // let mess = document.getElementById("mess").value;
            // console.log(mess);
            // $("#mrA").click(function () {
            //     socket.emit("client-send-data", "mess");
            // })


            $("#do").click(function(){
                socket.emit("client-send-color","red");
            })
            $("#xanh").click(function(){
                socket.emit("client-send-color","blue");
            })
            $("#vang").click(function(){
                socket.emit("client-send-color","yellow");
            })
        });