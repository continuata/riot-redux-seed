<list-view>
  <h2>A bloody list innit!</h2>
  <ul>
    <li each={ item in opts.list }>{ item }</li>
  </ul>
  <button onclick={ opts.getList }>Get LIST</button>
</list-view>
