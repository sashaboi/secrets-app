import { gql } from '@apollo/client';

export const SEE_COMMENT_BY_USER_ID = gql`
  query SeeUserComments($userId: String!) {
    comments(where: { commented_on_user_id: { _eq: $userId } }) {
      comment
      pk
    }
  }
`;
export const FIND_USERNAME_BY_ID = gql`
  query FindUserName($uid_from_local: String!) {
    Users_by_pk(uid_from_local: $uid_from_local) {
      username
    }
  }
`;
