var area = document.querySelector('.area');
var ball = document.querySelector('.ball');
var areaGetRect = area.getBoundingClientRect();

/**
 * GetBoundingClientRect()
 * Objenin veya nesnenin konumunu bulmamıza yarayan parametreler içerir.
 */


function getLocation(e){
    var x = e.clientX; // x ekseninde mouse yatay değerini döndürür.
    var y = e.clientY; // y ekseninde mouse dikey değerini döndürür .

    var areaX = areaGetRect.left; // alan x koordinat
    var areaY = areaGetRect.top; // alan y koordinat
    var areaRight = areaGetRect.right;
    var areaBottom = areaGetRect.bottom;

    var ballX = (x - areaX); // area(alan) içerisinde x koordinat bulunması (ball dışarı çıkmasın)
    var ballY = (y - areaY); // area(alan) içerisinde y koordinat bulunması (ball dışarı çıkmasın)

    var ballResult = ballX - ballY;
    ball.style.left = ballX+'px';
    ball.style.top = ballY+'px';

    console.clear();
    console.log(areaRight);
    console.log('x : '+ ballX);
    console.log('y : '+ ballY);
    console.log('ball: '+ ballResult);


    /*console.log(result);
    console.log("Area : " + (areaX - areaY));
    ball.style.left = x+'px';
    ball.style.top = y+'px';
    console.log('x = ' + x);
    console.log('y = ' + y);
    console.log('ball = ' + (x - y));*/
}

area.addEventListener('click' , getLocation);
area.addEventListener('mousemove' , getLocation);



/*area.addEventListener('click' , function (event){
    var mouseX = event.clientX - areaGetRect.left;
    var mouseY = event.clientY - areaGetRect.top;
    area
    ball.style.left = mouseX+'px';
    ball.style.top = mouseY+'px';
    if(mouseX <= 10 || mouseX >= 390 ){
        ball.style.left = '100px';
        console.log('Dışarı Çıkma');
    }
    console.log(mouseX);
    console.log(mouseY);
});*/

console.log(areaGetRect);