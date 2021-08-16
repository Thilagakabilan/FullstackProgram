const ele = document.createElement("div");
ele.setAttribute("class", "container");

const val = 10;

setTimeout(function () {
  ele.innerText = val;
  document.body.append(ele);
  setTimeout(function () {
    ele.innerText = val - 1;
    document.body.append(ele);
    setTimeout(function () {
      ele.innerText = val - 2;
      document.body.append(ele);
      setTimeout(function () {
        ele.innerText = val - 3;
        document.body.append(ele);
        setTimeout(function () {
          ele.innerText = val - 4;
          document.body.append(ele);
          setTimeout(function () {
            ele.innerText = val - 5;
            document.body.append(ele);
            setTimeout(function () {
              ele.innerText = val - 6;
              document.body.append(ele);
              setTimeout(function () {
                ele.innerText = val - 7;
                document.body.append(ele);
                setTimeout(function () {
                  ele.innerText = val - 8;
                  document.body.append(ele);
                  setTimeout(function () {
                    ele.innerText = val - 9;
                    document.body.append(ele);
                    setTimeout(function () {
                      ele.innerText = "Happy Independence Day";
                      document.body.append(ele);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
