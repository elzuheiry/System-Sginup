$(document).ready(function () {
  $("#message__error__show__text__create").hide();
  $("#message__error__show__password__create").hide();
  $("#message__error__show__email__create").hide();

  $("#show__message__form").hide();

  var error__text__create = false;
  var error__email__create = false;
  var error__password__create = false;

  $("#input__text__create").focusout(function () {
    check__text();
  });

  $("#input__text__create").keyup(function () {
    check__text01();
  });

  function check__text() {
    var text__input = $("#input__text__create").val();

    if (text__input == "") {
      $("#message__error__show__text__create").html(
        "The text field is required."
      );
      $("#message__error__show__text__create").show();
      $("#input__text__create").css("border-color", "#f5543f");
      error__text__create = true;
    } else {
      $("#message__error__show__text__create").hide();
      $("#input__text__create").css("border-color", "#6c757d");
    }
  }

  function check__text01() {
    var text__input = $("#input__text__create").val();

    if (text__input == "") {
      $("#message__error__show__text__create").html(
        "The text field is required."
      );
      $("#message__error__show__text__create").show();
      $("#input__text__create").css("border-color", "#f5543f");
      error__text__create = true;
    } else {
      $("#message__error__show__text__create").hide();
      $("#input__text__create").css("border-color", "#6c757d");
    }
  }

  $("#input__email__create").focusout(function () {
    check__email();
  });

  $("#input__email__create").keyup(function () {
    check__email01();
  });

  function check__email() {
    var email__input = $("#input__email__create").val();

    if (email__input == "") {
      $("#message__error__show__email__create").html(
        "The text field is required."
      );
      $("#message__error__show__email__create").show();
      $("#input__email__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else {
      $("#message__error__show__email__create").hide();
      $("#input__email__create").css("border-color", "#6c757d");
    }
  }

  function check__email01() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email__input = $("#input__email__create").val();

    if (email__input == "") {
      $("#message__error__show__email__create").html(
        "The text field is required."
      );
      $("#message__error__show__email__create").show();
      $("#input__email__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else if (!parent.test(email__input)) {
      $("#message__error__show__email__create").html(
        "The email is not a valid email."
      );
      $("#message__error__show__email__create").show();
      $("#input__email__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else {
      $("#message__error__show__email__create").hide();
      $("#input__email__create").css("border-color", "#6c757d");
    }
  }

  $("#input__password__create").focusout(function () {
    check__password();
  });

  $("#input__password__create").keyup(function () {
    check__password01();
  });

  function check__password() {
    var password__input = $("#input__password__create").val();

    if (password__input == "") {
      $("#message__error__show__password__create").html(
        "The text field is required."
      );
      $("#message__error__show__password__create").show();
      $("#input__password__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else if (password__input < 8) {
      $("#message__error__show__password__create").html(
        "The password must be more than 8 character ."
      );
      $("#message__error__show__password__create").show();
      $("#input__password__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else {
      $("#message__error__show__password__create").hide();
      $("#input__password__create").css("border-color", "#6c757d");
    }
  }

  function check__password01() {
    var password__input = $("#input__password__create").val();

    if (password__input == "") {
      $("#message__error__show__password__create").html(
        "The text field is required."
      );
      $("#message__error__show__password__create").show();
      $("#input__password__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else if (password__input < 8) {
      $("#message__error__show__password__create").html(
        "The password must be more than 8 character ."
      );
      $("#message__error__show__password__create").show();
      $("#input__password__create").css("border-color", "#f5543f");
      error__email__create = true;
    } else {
      $("#message__error__show__password__create").hide();
      $("#input__password__create").css("border-color", "#6c757d");
    }
  }

  $("#submit__create").click(function () {
    error__text__create = false;
    error__email__create = false;
    error__password__create = false;

    check__text();
    check__text01();
    check__email();
    check__email01();
    check__password();
    check__password01();

    if (
      error__text__create === false &&
      error__email__create === false &&
      error__password__create === false
    ) {
      $("#input__text__create").val("");
      $("#input__email__create").val("");
      $("#input__password__create").val("");
      $("#show__message__form").fadeIn(1000, function () {
        $(this).fadeOut(1000);
      });
      return false;
    } else {
      return false;
    }
  });

  $("#message__error__show__email__sign").hide();
  $("#message__error__show__password__sign").hide();

  var error__email__sign = false;
  var error__password__sign = false;

  $("#input__email__sign").focusout(function () {
    check__email__sign();
  });

  $("#input__email__sign").keyup(function () {
    check__email__sign01();
  });

  $("#input__password__sign").focusout(function () {
    check__password__sign();
  });

  $("#input__password__sign").keyup(function () {
    check__password__sign01();
  });

  function check__email__sign() {
    var email__input__sign = $("#input__email__sign").val();

    if (email__input__sign == "") {
      $("#message__error__show__email__sign").html(
        "The text field is required."
      );
      $("#message__error__show__email__sign").show();
      $("#input__email__sign").css("border-color", "#f5543f");
      error__email__create = true;
    } else {
      $("#message__error__show__email__sign").hide();
      $("#input__email__sign").css("border-color", "#6c757d");
    }
  }

  function check__email__sign01() {
    var parent = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email__input__sign = $("#input__email__sign").val();

    if (email__input__sign == "") {
      $("#message__error__show__email__sign").html(
        "The text field is required."
      );
      $("#message__error__show__email__sign").show();
      $("#input__email__sign").css("border-color", "#f5543f");
      error__email__sign = true;
    } else if (!parent.test(email__input__sign)) {
      $("#message__error__show__email__sign").html(
        "The email is not a valid email."
      );
      $("#message__error__show__email__sign").show();
      $("#input__email__sign").css("border-color", "#f5543f");
      error__email__sign = true;
    } else {
      $("#message__error__show__email__sign").hide();
      $("#input__email__sign").css("border-color", "#6c757d");
    }
  }

  function check__password__sign() {
    var password__input__sign = $("#input__password__sign").val();

    if (password__input__sign == "") {
      $("#message__error__show__password__sign").html(
        "The text field is required."
      );
      $("#message__error__show__password__sign").show();
      $("#input__password__sign").css("border-color", "#f5543f");
      error__password__sign = true;
    } else {
      $("#message__error__show__password__sign").hide();
      $("#input__password__sign").css("border-color", "#6c757d");
    }
  }

  function check__password__sign01() {
    var password__input__sign = $("#input__password__sign").val();

    if (password__input__sign == "") {
      $("#message__error__show__password__sign").html(
        "The text field is required."
      );
      $("#message__error__show__password__sign").show();
      $("#input__password__sign").css("border-color", "#f5543f");
      error__password__sign = true;
    } else {
      $("#message__error__show__password__sign").hide();
      $("#input__password__sign").css("border-color", "#6c757d");
    }
  }

  $("#submit__sign").click(function () {
    error__email__sign = false;
    error__password__sign = false;

    check__email__sign();
    check__email__sign01();
    check__password__sign();
    check__password__sign01();

    if (error__email__sign === false && error__password__sign === false) {
      $("#input__email__sign").val("");
      $("#input__password__sign").val("");
      return false;
    } else {
      return false;
    }
  });
});
