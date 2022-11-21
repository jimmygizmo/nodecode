// Good article on Javascript Classes vs Function Prototypes:
// https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

// Class Inheritance Example
// NOT RECOMMENDED. Use object composition, instead.

// https://gist.github.com/ericelliott/b668ce0ad1ab540df915
// http://codepen.io/ericelliott/pen/pgdPOb?editors=001

// https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

// **** THIS IS THE STRATEGY YOU SHOULD ==NOT== TAKE.
// See next example to compare.


class GuitarAmp {
    constructor ({ cabinet = 'spruce', distortion = '1', volume = '0' } = {}) {
      Object.assign(this, {
        cabinet, distortion, volume
      });
    }
  }
  
  class BassAmp extends GuitarAmp {
    constructor (options = {}) {
      super(options);
      this.lowCut = options.lowCut;
    }
  }
  
  class ChannelStrip extends BassAmp {
    constructor (options = {}) {
      super(options);
      this.inputLevel = options.inputLevel;
    }
  }
  
  test('Class Inheritance', nest => {
    nest.test('BassAmp', assert => {
      const msg = `instance should inherit props
      from GuitarAmp and BassAmp`;
  
      const myAmp = new BassAmp();
      const actual = Object.keys(myAmp);
      const expected = ['cabinet', 'distortion', 'volume', 'lowCut'];
  
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });
  
    nest.test('ChannelStrip', assert => {
      const msg = 'instance should inherit from GuitarAmp, BassAmp, and ChannelStrip';
      const myStrip = new ChannelStrip();
      const actual = Object.keys(myStrip);
      const expected = ['cabinet', 'distortion', 'volume', 'lowCut', 'inputLevel'];
  
      assert.deepEqual(actual, expected, msg);
      assert.end();
    });
  });

