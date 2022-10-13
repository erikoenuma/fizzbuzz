import DivideObj from "./DivideObj";

// 割りたい数字と対応する出力文字を用意
const data: DivideObj[] = [
    {number: 3, word: "fizz"},
    {number: 5, word: "buzz"},
];

function fizzbuzz(n: number) {

    for (let i=1; i<=n; i++) {

        const outputs:string[] = [];
        
        data.forEach((obj) => {
            if (i%obj.number == 0) {
                outputs.push(obj.word);
            }
        });

        if (outputs.length){
            console.log(outputs.join(''));
        }
        else{
            console.log(i);
        }
    }
}

fizzbuzz(100);
