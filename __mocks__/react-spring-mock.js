const React = require('react')

function renderPropsComponent(children) {
  return React.createElement('div', null, children()({}))
}

export function Spring(props) {
  return renderPropsComponent(props.children)
}

export function Trail(props) {
  return renderPropsComponent(props.children)
}

export function Transition(props) {
  return renderPropsComponent(props.children)
}

export function Keyframes(props) {
  return renderPropsComponent(props.children)
}

export function Parallax(props) {
  return renderPropsComponent(props.children)
}

export const animated = {
  div: props => {
    return React.createElement('div', null, props.children)
  },
}

export const useSpring = () => [{}, () => {}]

export const useTransition = (items, key, props) => items.map(item => ({ item, key: key(item), props: item.props }))
