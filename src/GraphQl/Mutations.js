import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation AddUser($uid_from_local: String!, $username: String!) {
    insert_Users_one(
      object: { uid_from_local: $uid_from_local, username: $username }
    ) {
      username
      uid_from_local
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($comment: String!, $commented_on_user_id: String!) {
    insert_comments_one(
      object: { comment: $comment, commented_on_user_id: $commented_on_user_id }
    ) {
      comment
      commented_on_user_id
      pk
    }
  }
`;
