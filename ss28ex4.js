
const rectangle = {
    width: 10,  
    height: 5,
    getArea: function() {
        return rectangle.width * rectangle.height; //this dùng để tham chiếu đến đối tượng
    }
};
console.log(rectangle.getArea());
