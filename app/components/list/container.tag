<list>
  <list-view get-list={ getList } list={ list }/>

  <script>
    import { getList } from './actions'
    import selector from './selector'

    this.dispatchify({ getList })
    this.subscribe(selector)
  </script>
</list>
