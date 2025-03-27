import { useState } from 'react';

function App() {
  const [testValidation, setTestValidation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // クエリパラメータ test_validation を含むURLを生成
    const url = `http://localhost:8000/route_test?test_validation=${testValidation}`;

    try {
      // GETリクエストを送信
      const response = await fetch(url);

      if (response.ok) {
        const result = await response.text(); // レスポンスのテキストを取得
        console.log(result); // コンソールに結果を表示
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };

  return (
    <div>
      <h1>Test Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          test_validation:
          <input
            type='text'
            value={testValidation}
            onChange={(e) => setTestValidation(e.target.value)}
          />
        </label>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export default App;
