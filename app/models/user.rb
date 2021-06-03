# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  profile_pic_id  :integer
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :user_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && is_password?(password)
            return user
        else
            return nil
        end
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token =|| SecureRandom::urlsafe_base64(16) 
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end
end
