require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get mission" do
    get :mission
    assert_response :success
  end

  test "should get schedule" do
    get :schedule
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
