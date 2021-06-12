# == Schema Information
#
# Table name: parks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  acreage     :integer
#  rating      :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ParkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
