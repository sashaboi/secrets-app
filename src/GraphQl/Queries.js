import { gql } from '@apollo/client';

export const SEE_COMMENT_BY_USER_ID = gql`
  query SeeUserComments($userId: String!) {
    comments(where: { commented_on_user_id: { _eq: $userId } }) {
      comment
      pk
    }
  }
`;
