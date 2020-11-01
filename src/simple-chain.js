const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if(this.chain[position-1]==undefined){
      this.chain = [];
      throw new Error('Error');
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let newChain=this.chain.join('~~');
    this.chain=[];
    return newChain;
  }
};

module.exports = chainMaker;