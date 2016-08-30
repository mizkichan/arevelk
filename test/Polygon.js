import assert from 'assert'
import Polygon from '../src/Polygon'

describe('Polygon', () => {
  const polygon = new Polygon([[4, 4], [4, 0], [0, 0], [0, 4]])

  describe('#vertices', () => {
    it('should be sorted counterclockwise', () => {
      assert.deepEqual(polygon.vertices, [[0, 0], [4, 0], [4, 4], [0, 4]])
    })
  })

  describe('#edges', () => {
    it('should be represent edges', () => {
      assert.deepEqual(polygon.edges, [[[0, 0], [4, 0]], [[4, 0], [4, 4]], [[4, 4], [0, 4]], [[0, 4], [0, 0]]])
    })
  })

  describe('#getCenter()', () => {
    it('returns the center of polygon', () => {
      assert.deepEqual(polygon.getCenter(), [2, 2])
    })
  })

  describe('#isContaining()', () => {
    it('returns whether given point is in its interior', () => {
      assert.equal(polygon.isContaining([2, 2]), true)
      assert.equal(polygon.isContaining([5, 5]), false)
    })
  })
})

// vim: set ts=2 sw=2 et:
