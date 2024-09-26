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

  async getMemberById(id) {
    try {
      const memberById = await this.MemberRepository.findMemberById(id);
      if (!memberById) {
        return {
          members: null,
          message: "Member not found",
          statusCode: 404,
        };
      } else {
        return {
          members: memberById,
          message: "Get member by id success",
          statusCode: 200,
        };
      }
    } catch (error) {
      return {
        members: null,
        message: error.message,
        statusCode: 500,
      };
    }
  }
}

module.exports = MemberService;
