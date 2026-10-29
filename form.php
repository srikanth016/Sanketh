<?php
if(isset($_POST['SUBMIT'])){
    $name = $_POST['name'];
    $number = $_POST['number'];
    $location = $_POST["location"];

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'data';

    $conn = mysqli_connect($host,$user,$pass,$dbname);
    $sql = "INSERT INTO tb_data(name,number,location) values('$name','$number','$location')";
    mysqli_query($conn,$sql);


}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styform.css">
    <script src="stg.js"></script>
</head>
<body>
    <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo">Sanketh</h2>
            </div>

            <div class="menu">
                <ul>
                    <li><a href="display2.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="services.html">SERVICE</a></li>
                    
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
            </div>

           

        </div> 
        <div class="content">
            

                <div class="form">
                    <form action="#" method="POST">
                    <h2>DISCRIBE ISSUE</h2>
                    <input type="email" name="email" placeholder="Enter Email Here">
                    <input type="name" name="name" placeholder="Name">
                    <input type="number" name="number" placeholder="Enter Mobile Number">
                    <input type="issue" name="issue" placeholder="Enter Issue">
                    <input type="brief" name="brief" placeholder="Explain about issue in brief">
                    <input type="location" name="location" placeholder="Enter Location">
                    <input type="time_p" name="time_p" placeholder="Time of Incident ">
                    <input type="submit" name="submit" placeholder="submit">
                    <input type="msg" name="" placeholder="Enter msg">
                    <button class="btnn" href="#" onclick="show('popup')">SUBMIT</button>

                    <!-- This is what will be included inside the popup -->
                    <div class="popup" id="popup">
                      <p>This is a popup!</p>
                      <p>Form submitted Succesfully</p>
                      <p>You will be contacted soon.</p>
                      <p>Thank You</p>
                      <a href="#" onclick="hide('popup')">Close</a>
                    </div>
                    

                    <p class="link">For more quires<br>
                    <a href="contact.html">click</a> here</a></p>
                    

                   
                    </form>
                </div>
                    </div>
                </div>
        </div>
    </div>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
</body>
</html>