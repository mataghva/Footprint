# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  description    :text             not null
#  short_descr    :text             not null
#  length         :float            not null
#  longitude      :float            not null
#  latitude       :float            not null
#  elevation_gain :integer          not null
#  difficulty     :string           not null
#  usage          :string           not null
#  route_type     :string           not null
#  features       :string           not null
#  rating         :float            not null
#  park_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Trail < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :short_descr, presence: true
    validates :length, presence: true
    validates :longitude, presence: true
    validates :latitude, presence: true
    validates :elevation_gain, presence: true
    validates :difficulty, presence: true
    validates :usage, presence: true
    validates :route_type, presence: true
    validates :features, presence: true
    validates :rating, presence: true
    validates :park_id, presence: true
    
end
