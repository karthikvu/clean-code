class Sample {
  constructor({ id }) {
    this.id = id;
  }

  static fromApi(rawData) {
    return new Sample({
      id: rawData.id,
    });
  }
}

export default Sample;
