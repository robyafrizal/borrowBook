const { Member } = require("../../models");

class MemberRepository {
  constructor() {}

  async findMember() {
    const memberList = await Member.findAll();

    return memberList;
  }
}

module.exports = MemberRepository;
