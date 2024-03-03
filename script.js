  const shape = document.getElementById('shape')
  const timerp = document.getElementById('timerp')
  let start = new Date().getTime();
  const page = document.body;

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  function makeshapeappear() {


        if (Math.random() > 0.5){
            shape.style.borderRadius = '50%';
        } else{
            shape.style.borderRadius = '0';

        }
        
        page.style.backgroundColor = getRandomColor();
        shape.style.backgroundColor = getRandomColor();
        shape.style.height = Math.random() * 300 + 'px';
        shape.style.width = ( (Math.random() * 200) +100) + 'px';
        shape.style.top = Math.random() * 400 + 'px';
        shape.style.left = Math.random() * 400 + 'px';
        shape.style.display = 'block';
        start = new Date().getTime();
        }
    

   function appearafterdelay(){
        setTimeout(makeshapeappear, 1000);


    }

    appearafterdelay();



   shape.onclick =function timer(){
        let end = new Date().getTime();
        shape.style.display='none';
        let timetaken =( end - start)/1000;
        timerp.innerHTML= 'Your time is : ' + timetaken +'s';
        appearafterdelay();

        scorecount();

    }

    let clickcount=0;
    let counter = document.getElementById('counter')

    function scorecount(){
        clickcount++;
        if(clickcount ===1){
        counter.innerText='you clicked'+' ' + clickcount +' ' +  'time';
        } else{
        counter.innerText='you clicked'+' ' + clickcount +' ' +  'times';
        }
    }



    

