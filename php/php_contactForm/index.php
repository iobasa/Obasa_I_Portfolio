<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact form</title>
</head>
<body>
    <main>
    <div class="contact"><!--Contact textbox area-->
            <!-- Forms-->
    
            <form action="data/contact.php" method="post">
            <h1>Contact us</h1>

            <div class="m=name">
              <label for ="name">Name</label>
              <input id="name" name="name" type="text" placeholder="name">
            </div>
            <br>


            <br>

          <div class="E-mail">
            <label for = "email">E-Mail</label>
            <input id="email" name="email" type="email" placeholder="email">
          </div>
          <br>

          <div class="subject">
            <label for = "subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="subject">
          </div>
          <br>


              <div class="message">
                <label for = "message">Message</label>
              <textarea id="message" name="message" type="message"> </textarea>
            </div>
            <br>


            <div class="send">
            <button>SUBMIT</button>
            </div>
            </form>
    </main>
</body>
</html>