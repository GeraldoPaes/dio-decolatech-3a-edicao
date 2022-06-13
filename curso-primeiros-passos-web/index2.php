<html>

    <head>
        <title>Meu SEGUNDO Site em PHP</title>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

        <style type="text/css">
            .linha {
                font-weight: bold;
                color: darkslateblue;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>

    <body>

        <?php
            for ( $i = 0 ; $i < 10 ; $i++ ) {
                print("<span class=\"linha\">Linha número " . $i . "</span><br />");
            }
        ?>

    </body>

    <script type="text/javascript">
        $(document).ready(function() {
            alert("Página carregada!");
        });
    </script>

</html>