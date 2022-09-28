// Bài 1: Hãy thử 5 phép toán trong mảng.

console.log("-----Bài 1");
// Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
var style = ["Jazz", "Blues"];
console.log(style);

// Thêm “Rock-n-Roll” vào cuối.
style.push("Roc-n-Roll");
console.log(style);


// Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
var changerCenter = arr =>{
    let center;
    if(arr.length % 2 != 0){
        center = (arr.length / 2 ) + 0.5;
    }
    arr.splice(center - 1, 1 , "Classics");
    return arr;
}
console.log(changerCenter(style))

// Tách giá trị đầu tiên của mảng và hiển thị nó.
style.splice(0,1);
// style.shift();
console.log(style)

// Thêm trước Rap và Reggae vào mảng.
style.splice(0,0,"Rap","Reggae");
// style.unshift("Rap","Reggae");
console.log(style)

// Bài 2: Đầu vào là một mảng số, ví dụ: arr = [1, -2, 3, 4, -9, 6].
// Nhiệm vụ là: tìm mảng con liền kề của arr với tổng các item lớn nhất.
// Viết hàm getMaxSubSum(arr) sẽ trả về tổng đó.
console.log("-----Bài 2");
var arrnum = [1, -2, 3, 4, -9, 6];
console.log(arrnum)

var getMaxSubSum = arr =>{
    let maxSubSum = 0;
    let start,end;
    let newarr;

    for(var i = 0; i < arr.length - 1; i++){
        for(var j = i+1; j< arr.length; j++){
            let subSum = 0;
            for (element in arr){
                if(element >= i && element <= j){
                    subSum += arr[element];
                }
            }
            if(subSum>=maxSubSum){
                maxSubSum = subSum;
                start = i;
                end = j;
            }
        }
    }

    newarr = arr.filter((value,index)=>(index >= start && index <= end));

    console.log("Mảng con liền kề có tổng các item lớn nhất là: ",newarr)
    return maxSubSum;
}

console.log(getMaxSubSum(arrnum));


// Bài 3: Viết một hàm filterRange(arr, a, b) lấy một mảng arr, tìm kiếm các phần tử giữa a và b trong đó và trả về một mảng trong số đó.
// -> Hàm không nên sửa đổi mảng. Nó sẽ trả về mảng mới.
console.log("-----Bài 3");

var filterRangeInPlace = (arr,a,b) => {
    var newarr = [];
    localA = arr.findIndex(element =>(element == a))
    localB = arr.findIndex(element =>(element == b))
    if(localA && localB){
        newarr= arr.filter((element,index)=>(index > localA && index < localB))
    }

    return newarr;
}

console.log(filterRangeInPlace([1,2,3,4,5,6],2,6))