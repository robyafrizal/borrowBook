class MemberService {
  constructor(MemberRepository) {
    this.MemberRepository = MemberRepository;
  }

  async getMember() {
    try {
      const memberList = await this.MemberRepository.findMember();

      return {
        statusCode: 200,
        members: memberList,
      };
    } catch (err) {
      return {
        statusCode: 500,
        members: null,
      };
    }
  }
}

module.exports = MemberService;
