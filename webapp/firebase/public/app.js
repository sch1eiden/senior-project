document.addEventListener("DOMContentLoaded", evnet => {
    const app = firebase.app();
    
    const db = firebase.firestore();
    
    const myBin = db.collection('Bin').doc('firstBin');


    myBin.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title;
    })
    // myBin.onSnapshot(doc => {
    //         const data = doc.data();
    //         document.write(data.title + `<br>`);
    //         document.write(data.id + `<br>`);
    //     });
});

function updataPost(e) {
    const db = firebase.firestore();
    const myBin = db.collection('Bin').doc('firstBin');
    myBin.update({ title: e.target.value });
}

// authentication
// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user;
//             document.write(`Hello ${user.displayName}`);
//             console.log(user);
//         })
//         .catch(console.log)
// }