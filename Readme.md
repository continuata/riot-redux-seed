# Riot Redux Seed 
## getting started with a scalable Front-End Architecture

### installation using yarn
Simply navigate to your project folder and type
```bash
yarn
```

### running a hot-loading version of the app
```bash
yarn start
```

### building the app ready for deployment
```bash
yarn bundle
```

## architecture
The architecture relies on a strict separation of concerns between presentational views, containers, the store and asynchronoyus behaviour.
We use RiotJS for the containers and views, Redux manages the store and RxJS interfaces with Redux to handle async behaviour.

## How to create visual components
Components are stored in the `components` folder of the app, each sub-folder is a component that can be used by our app. A component usually has a container, one or more views, a selector and some actions. It also contains an `index.js` file for importing all the Riot tags.

### Containers (`container.tag`)
Containers are riot tags that control the behaviour of presentational views.
A riot-redux mixin exposes key redux functionality to the Riot tags. `this.dispatchify()` allows actions to be dispatched from Riot just by calling the function on the template. `this.subscribe()` responds to Redux store state changes and passes them through a selector. Selectors are used to conditionally update a container and its child views when state data that the container cares about has changed (as opposed to other irrelevant data in the store). Selectors are used to then transform state data into a friendly format for the container and its views. See further below for information on selectors.
```html
<my-container-name>
  <child-view-a/>
  <child-view-b/>
  
  <script>
    import selector from './selector'
    import { actionA, actionB } from './actions'
    this.subscribe(selector)
    this.dispatchify({ actionA, actionB })
  </script>
</my-container-name>
```
### Views (`myview.view.tag`)
Presentational views are concenr
