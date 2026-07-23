document.addEventListener('DOMContentLoaded', () => {
  /* === 1. ハンバーガーメニューの開閉処理 === */
  const hamburger = document.getElementById('js-hamburger');
  const spNav = document.getElementById('js-sp-nav');

  if (hamburger && spNav) {
    hamburger.addEventListener('click', () => {
      // クラスの付け外し（is-active と is-open）
      hamburger.classList.toggle('is-active');
      spNav.classList.toggle('is-open');

      // アクセシビリティ用の状態更新
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      spNav.setAttribute('aria-hidden', expanded);
    });
  } else {
    console.error('ハンバーガーボタンまたはメニューの要素が見つかりません。');
  }

  /* === 2. スクロール監視処理（ヘッダー脱出でボタンの色を変更） === */
  if (hamburger) {
    window.addEventListener('scroll', () => {
      // 50px 以上スクロールしたら is-scrolled クラスを付与
      if (window.scrollY > 50) {
        hamburger.classList.add('is-scrolled');
      } else {
        hamburger.classList.remove('is-scrolled');
      }
    });
  }

  /* === 3. Q&A セクションのアコーディオン開閉処理 === */
  const qaQuestions = document.querySelectorAll('.qa-item__question');

  if (qaQuestions.length > 0) {
    qaQuestions.forEach((question) => {
      question.addEventListener('click', () => {
        // 親要素 (.qa-item) を取得
        const qaItem = question.parentElement;

        // is-open クラスを付け外しして「＋/ー」切替と回答の表示/非表示をコントロール
        qaItem.classList.toggle('is-open');
      });
    });
  }
});