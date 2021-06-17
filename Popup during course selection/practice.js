const myFunction = async () =>{
    const res = await fetch('https://api.cryptonator.com/api/full/btc-usd');
    const data = await res.json();
    console.log(data);
}