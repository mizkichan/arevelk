// @flow
import React from 'react'

import Polygon from './Polygon.js'
import Edge from './Edge.js'
import Point from './Point.js'
import { randomDelaunayTriangulation } from './utils.js'

class Arevelk extends React.Component {
  state: {
    isRunning: boolean,
    width: number,
    height: number,
    numberOfSplits: number,
    polygons: $Subtype<Polygon>[],
  }

  constructor() {
    super()

    this.state = {
      isRunning: false,
      width: 101,
      height: 65,
      numberOfSplits: 8,
      polygons: randomDelaunayTriangulation(frame, 1)
    }
  }

  handleToggleRunning() {
    this.setState({ isRunning: !this.state.isRunning })
  }

  handleReset() {
    this.setState({ polygons: randomDelaunayTriangulation(frame, this.state.numberOfSplits) })
  }

  handleNumberOfPointsChange(ev: SyntheticInputEvent) {
    this.setState({ numberOfSplits: Number(ev.target.value) })
  }

  render() {
    return (
      <div>
        <svg width={ 800 } height={ 600 } viewBox={ `-1 -1 103 67` }>
          <g>{ grid }</g>
          { this.state.polygons.map((p, i) => (
            <g key={ i }>
              <polygon points={ p.map(({ x, y }) => `${ x },${ y }`).join(' ') } />
              { p.map(({ x, y }, j) => <circle key={ j } cx={ x } cy={ y } r={ 0.5 } />) }
            </g>
          )) }
        </svg>

        <div className="column">
          <div className="row">
            <button onClick={ () => this.handleToggleRunning() }>{ this.state.isRunning ? 'pause' : 'run' }</button>
          </div>

          <div className="row">
            <label>number of points: <input type="number" min={ 0 } max={ 1024 } value={ this.state.numberOfSplits } step={ 1 } onChange={ ev => this.handleNumberOfPointsChange(ev) } /></label>
            <button onClick={ () => this.handleReset() }>reset</button>
          </div>
        </div>
      </div>
    )
  }
}

const grid = []
for (let x = 0; x < 101; ++x) for (let y = 0; y < 65; ++y) {
  grid.push(<circle className="grid" key={ `grid${x},${y}` } cx={ x } cy={ y } r={ 0.1 } />)
}

const frame = new Polygon(
  new Point(  0,  0),
  new Point(100,  0),
  new Point(100, 64),
  new Point(  0, 64),
)

export default Arevelk

// vim: set ts=2 sw=2 et:
