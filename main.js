

const CANVAS = document.getElementById("draw");
const CONTEXT = CANVAS.getContext("2d");

CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;
//Window object  https://www.w3schools.com/jsref/obj_window.asp

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return console.log(`The rectangle area is ${this.width * this.height}`);
    }

    getPerimeter() {
        return console.log(`The rectangle perimeter is ${(this.width + this.height) * 2}`);
    }

    setCoor(x, y) {
        this.x = x;
        this.y = y;
    }

    setLineWidth(lineWidth) {
        CONTEXT.lineWidth = lineWidth;
    //   lineWidth độ đậm của nét vẽ
    }

    setStrokeStyle(strokeStyle) {
        CONTEXT.strokeStyle = strokeStyle;
    //    strokeStyle trả về màu sắc,gradient,pattern của nét vẽ
    }

    setFillStyle(fillStyle) {
        CONTEXT.fillStyle = fillStyle;
    //    strokeStyle trả về màu sắc,gradient,pattern được tô cho hình vẽ
    }

    //draw no filled
    draw() {
        CONTEXT.strokeRect(this.x, this.y, this.width, this.height);
    //    strokeReact() vẽ hình chữ nhật rỗng, với màu mặc định nét vẽ là màu đen
    //    --> sử dụng strokeStyle để đặt màu,.. cho nét vẽ
    //    context.strokeRect(x,y,width,height);

    }

    //draw filled
    drawFilledRect() {
        CONTEXT.fillRect(this.x, this.y, this.width, this.height);
    //    fillReact() vẽ hình chữ nhật đặc, màu mặc định là đen
    //    --> sử dụng fillStyle để đặc màu,... cho hình vẽ
    //    context .fillRect ( x, y, width, height );
    }

    //delete rectangle
    erase(x, y,width,height) {
        CONTEXT.clearRect(x,y,width,height );
        //context .clearRect ( x, y, width, height ) xóa các pixel được chỉ định
    }
}
// erase(x, y) {
//     CONTEXT.clearRect(
//         x - this.lineWidth - 1,
//         y - this.lineWidth - 1,
//         this.width + this.lineWidth + 1,
//         this.height + this.lineWidth + 1
//     );
// }
// }




//  người dùng tự nhập
let myRectangle = new Rectangle(+prompt('Reactangle width?'), +prompt('Reactangle height ?'));
//  bug ở phương thức tính chu vi ( w400,h200) ---> vì chu vi là thực hiện phép cộng --> nếu ko ép kiểu dữ liệu nhập vào của prompt thì toán tử '+' sẽ hiểu là cộng chuỗi!!!
// gọi các phương thức bằng console.log



// set cứng !!
// vì set cứng là nhập trực tiếp giá trị vào, nên máy sẽ hiểu là giá trị kiểu số

//
// let myRectangle = new Rectangle(400, 200);
//
// myRectangle.setLineWidth(2);
//
// myRectangle.setCoor(10, 20);
// myRectangle.draw();
//
// myRectangle.setCoor(10, 250);
// myRectangle.setStrokeStyle('red');
// myRectangle.draw();
//
// myRectangle.setCoor(420,20)
// myRectangle.setFillStyle('silver');
// myRectangle.drawFilledRect();
//
// myRectangle.erase(420,140,350,10)
// myRectangle.getArea();
// myRectangle.getPerimeter();







