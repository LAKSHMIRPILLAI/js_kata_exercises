function digitToRoman(number) {
  if (number === undefined) throw new Error("number is required");
  let result="";
  const num=number.toString().split('');

  const dict={
    1:['','I',"II","III","IV","V","VI","VII","VIII","IX"],
    2:['','X',"XX","XXX","XL","L","LX","LXX","LXXX","XC"],
    3:['','C',"CC","CCC","CD","D","DC","DCC","DCCC","CM"],
    4:['','M',"MM","MMM"]
  };

  for (let i=0;i<num.length;i++){
    const pos=(num.length)-i;//To calculate thousandth/hundredth/tens/units position
    result+=dict[pos][num[i]];
  }
  return(''+result+'');
}

function romanToDigit(String) {
  if (String === undefined) throw new Error("string is required");
      let result=0;
      let  value=0;

      const dict={ 'M':1000,'D':500,'C':100,'L':50,'X':10,'IX':9,'VIII':8,'VII':7,
      'VI':6,'V':5,'IV':4,'III':3,'II':2,'I':1};

        for (let i=0;i<String.length;i++){
            if (dict[String[i]]>=dict[String[i+1]]){
                value=dict[String[i]];
                result+=value;}
            else if (dict[String[i]]<dict[String[i+1]]){
                value=dict[String[i+1]]-dict[String[i]];
                i=i+1;
                result+=value;}
            else if (i===String.length-1){
                  value=dict[String[i]];
                  result+=value;}
      }
  

     return result;
}

module.exports = {
  digitToRoman,romanToDigit
};
