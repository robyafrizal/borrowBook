const { Member } = require("../../models");

class MemberRepository {
  constructor() {}

  async findMember() {
    const memberList = await Member.findAll();
    return memberList;
  }
  async findMemberById(id) {
    const idMember = await Member.findOne({ where: { id } });
    return idMember;
  }

  async save(member) {
    return await member.save();
  }
}

module.exports = MemberRepository;
