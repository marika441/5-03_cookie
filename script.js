'use strict';

const agree = Cookies.get('cookie-agree');
if(agree === 'yes') {
    console.log('クッキーを確認しました');
} else {
    console.log('クッキーを確認できません');
    document.getElementById('agreebtn').onclick = function() {
        Cookies.set('cookie-agree', 'yes', {expires: 7});
    };
}