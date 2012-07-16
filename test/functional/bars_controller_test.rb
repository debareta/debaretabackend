require 'test_helper'

class BarsControllerTest < ActionController::TestCase
  setup do
    @bar = bars(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bars)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bar" do
    assert_difference('Bar.count') do
      post :create, :bar => { :/Users/rafaelgarrote/Desarrollo/Debareta/debareta => @bar./Users/rafaelgarrote/Desarrollo/Debareta/debareta, :address => @bar.address, :business_hours => @bar.business_hours, :city => @bar.city, :country => @bar.country, :created_at => @bar.created_at, :description => @bar.description, :faceboo_kprofile => @bar.faceboo_kprofile, :latidude => @bar.latidude, :longitude => @bar.longitude, :name => @bar.name, :postalcode => @bar.postalcode, :province => @bar.province, :twitter_profile => @bar.twitter_profile, :type => @bar.type, :updated_at => @bar.updated_at, :webpage => @bar.webpage }
    end

    assert_redirected_to bar_path(assigns(:bar))
  end

  test "should show bar" do
    get :show, :id => @bar
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @bar
    assert_response :success
  end

  test "should update bar" do
    put :update, :id => @bar, :bar => { :/Users/rafaelgarrote/Desarrollo/Debareta/debareta => @bar./Users/rafaelgarrote/Desarrollo/Debareta/debareta, :address => @bar.address, :business_hours => @bar.business_hours, :city => @bar.city, :country => @bar.country, :created_at => @bar.created_at, :description => @bar.description, :faceboo_kprofile => @bar.faceboo_kprofile, :latidude => @bar.latidude, :longitude => @bar.longitude, :name => @bar.name, :postalcode => @bar.postalcode, :province => @bar.province, :twitter_profile => @bar.twitter_profile, :type => @bar.type, :updated_at => @bar.updated_at, :webpage => @bar.webpage }
    assert_redirected_to bar_path(assigns(:bar))
  end

  test "should destroy bar" do
    assert_difference('Bar.count', -1) do
      delete :destroy, :id => @bar
    end

    assert_redirected_to bars_path
  end
end
