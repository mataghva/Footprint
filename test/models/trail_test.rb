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
require 'test_helper'

class TrailTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
