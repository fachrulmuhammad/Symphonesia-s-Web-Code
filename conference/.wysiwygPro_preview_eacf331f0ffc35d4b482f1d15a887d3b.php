<?php
if ($_GET['randomId'] != "MZojt5cullNv8YnBBbvLpwwKQMkLm8vRycA9kNJ63AXEF35FN_WlZfy3eCfXf6zJ") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
